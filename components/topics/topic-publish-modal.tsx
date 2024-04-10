"use client"

import React, { ReactElement, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@nextui-org/button"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card"
import { Divider } from "@nextui-org/divider"
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal"
import { Tooltip } from "@nextui-org/tooltip"

export default function TopicPublishModal({
  children,
  id,
}: {
  children: React.ReactNode
  id: string
}) {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const enhancedChild = React.cloneElement(children as ReactElement, {
    onPress: onOpen,
  })

  return (
    <>
      {enhancedChild}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Publish proposal
              </ModalHeader>
              <ModalBody>
                <Card>
                  <CardBody>
                    <div>
                      <Tooltip content="0.075151546481516 GFE">
                        <div className="flex w-full justify-between gap-1">
                          <p className="mr-4 whitespace-nowrap">
                            Estimated gas fees
                          </p>
                          <span className="ml-auto line-clamp-1">
                            0.075151546481516
                          </span>
                          <span>GFE</span>
                        </div>
                      </Tooltip>
                      <Tooltip content="0.121654894351651 GFE">
                        <div className="flex w-full justify-between text-sm">
                          <p className="mr-4 whitespace-nowrap">Max fee</p>
                          <span className="ml-auto line-clamp-1">
                            0.121654894351651
                          </span>
                          <span>GFE</span>
                        </div>
                      </Tooltip>
                    </div>
                    <Divider className="my-3" />
                    <div>
                      <Tooltip content="0.075151546481516 GFE">
                        <div className="flex w-full justify-between gap-1">
                          <p className="mr-4 whitespace-nowrap">Total cost</p>
                          <span className="ml-auto line-clamp-1">
                            0.075151546481516
                          </span>
                          <span>GFE</span>
                        </div>
                      </Tooltip>
                      <div className="flex w-full justify-end text-sm">
                        <p>$0.08</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" disabled={loading} isLoading={loading}>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
